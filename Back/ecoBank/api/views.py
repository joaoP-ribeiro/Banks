from django.shortcuts import render
from django.shortcuts import render

from django.db.models import Q
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .models import CustomUsuario, NaturalPerson, Email, Phone, LegalPerson, Address, Account, Card, Transaction, Loan, Investment

from .serializer import ClientSerializer, EmailSerializer, PhoneSerializer, AddressSerializer, NaturalPersonSerializer, LegalPersonSerializer, AccountSerializer, CardSerializer, PixSerializer, LoanSerializer, InvestimentsSerializer
from rest_framework.permissions import IsAuthenticated


class EmailView(viewsets.ModelViewSet):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()

class PhoneView(viewsets.ModelViewSet):
    serializer_class = PhoneSerializer
    queryset = Phone.objects.all()

class AddressView(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

class AnddressView(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

class NaturalPersonView(viewsets.ModelViewSet):
    serializer_class = NaturalPersonSerializer
    queryset = NaturalPerson.objects.all()

class LegalPersonView(viewsets.ModelViewSet):
    serializer_class = LegalPersonSerializer
    queryset = LegalPerson.objects.all()

class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = CustomUsuario.objects.all()
    
class AccountView(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()
    
class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()

class PixView(viewsets.GenericViewSet):
    serializer_class = PixSerializer
    queryset = Transaction.objects.all()
    
    def create(self, request):
        id_pay_account = request.data.get('pay_account')
        id_card = request.data.get('card') 
        id_receive_account = request.data.get('receive_account')
        value = request.data.get('value')
        pay_account = get_object_or_404(Account, pk=id_pay_account)
        card = get_object_or_404(Card, pk=id_card)
        receive_account = get_object_or_404(Account, pk=id_receive_account)
        
        transaction = Transaction.objects.create(
            card = card,
            pay_account=pay_account,
            receive_account=receive_account,
            value=value
        )

        pay_account.saldo -= value
        receive_account.saldo += value

        pay_account.save()
        receive_account.save()
        
class LoanView(viewsets.ModelViewSet):
    serializer_class = LoanSerializer
    queryset = Loan.objects.all()

    def create(self, request):
        id_account = request.data.get('account')
        installment_value = request.data.get('installment_value')
        times = request.data.get('times')
        value = request.data.get('value')
        account = get_object_or_404(Account, pk=id_account)

        loan = Loan.objects.create(
            account = account,
            installment_value = installment_value,
            times = times,
            value = value
        )

        account.saldo += value
        account.save()

class InvestmentView(viewsets.ModelViewSet):
    serializer_class = InvestimentsSerializer
    queryset = Investment.objects.all()

    def create(self, request):
        id_account = request.data.get('account')
        value = request.data.get('value')
        account = get_object_or_404(Account, pk=id_account)

        investiments = Investment.objects.create(
            account = account,
            value = value
        )

        account.saldo -= value
        account.save()

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            clients = CustomUsuario.objects.filter(
                Q(identification_number__icontains=search)
            ).distinct()
            return clients
        else:
            return CustomUsuario.objects.all()