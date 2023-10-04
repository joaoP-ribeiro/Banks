from rest_framework import serializers
from .models import CustomUsuario, NaturalPerson, LegalPerson, Email, Phone, Address, Account, Card, Transaction


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = '__all__'


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'


class LegalPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalPerson
        fields = '__all__'


class NaturalPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaturalPerson
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'


class CardSerializer(serializers.ModelSerializer):
    transaction = TransactionSerializer(source='transaction_card', read_only=True, many=True)

    class Meta:
        model = Card
        fields = [
            'account',
            'number',
            'expiration_date',
            'status',
            'verification_number',
            'transaction'
        ]

class AccountSerializer(serializers.ModelSerializer):
    card = CardSerializer(source='account_card', read_only=True)

    class Meta:
        model = Account
        fields = [
            'client',
            'agency',
            'number',
            'typee',
            'credit_limit',
            'saldo',
            'status',
            'card',
        ]


class ClientSerializer(serializers.ModelSerializer):
    natural_person = NaturalPersonSerializer(source='client_naturalPerson', read_only=True)
    legal_person = LegalPersonSerializer(source='client_legalPerson', read_only=True)
    emails = EmailSerializer(source='client_emails', many=True, read_only=True)
    phones = PhoneSerializer(source='client_phones', many=True, read_only=True)
    addresses = AddressSerializer(source='client_addresses', many=True, read_only=True)
    account = AccountSerializer(source='client_account', read_only=True)

    class Meta:
        model = CustomUsuario
        fields = [
            'identification_number',
            'photograph',
            'natural_person',
            'legal_person',
            'emails',
            'phones',
            'addresses',
            'account'
        ]
