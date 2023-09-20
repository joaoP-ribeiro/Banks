from rest_framework import serializers
from .models import CustomUsuario, NaturalPerson, LegalPerson, Email, Phone, Anddress


class AnddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anddress
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

class ClientSerializer(serializers.ModelSerializer):
    # phone = PhoneSerializer(many=True)
    # anddress = AnddressSerializer(many=True)
    email = EmailSerializer(many=True)
    # legal_person = LegalPersonSerializer(many=True)
    # natural_person = NaturalPersonSerializer(many=True)

    class Meta:
        model = CustomUsuario
        fields = [
            'identification_number',
            'photograph',
            'email'
            
        ]