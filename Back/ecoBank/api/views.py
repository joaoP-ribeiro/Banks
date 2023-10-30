from django.shortcuts import render
from django.shortcuts import render

from django.db.models import Q
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .models import CustomUsuario, NaturalPerson, Email, Phone, LegalPerson, Address, Account, Card, Transaction, Loan, Investment, Historic

from .serializer import ClientSerializer, HistoricSerializer, EmailSerializer, PhoneSerializer, AddressSerializer, NaturalPersonSerializer, LegalPersonSerializer, AccountSerializer, CardSerializer, PixSerializer, LoanSerializer, InvestimentsSerializer
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
    
class AccountViewSet(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            number = Account.objects.filter(
                Q(number__icontains=search)
            ).distinct()
            return number
        else:
            return Account.objects.all()


class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()
    
class CardViewSet(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            account = Card.objects.filter(
                Q(account__number__icontains=search)
            ).distinct()
            return account
        else:
            return Card.objects.all()

class PixView(viewsets.GenericViewSet):
    serializer_class = PixSerializer
    queryset = Transaction.objects.all()
    
    def create(self, request):
        id_pay_account = request.data.get('account')
        id_receive_account = request.data.get('receive_account')
        value = request.data.get('value')
        pay_account = get_object_or_404(Account, pk=id_pay_account)
        receive_account = get_object_or_404(Account, pk=id_receive_account)
        
        transaction = Transaction.objects.create(
            account=pay_account,
            receive_account=receive_account,
            value=value
        )

        historic = Historic.objects.create(
            account=pay_account,
            transaction='Pix',
            positive_negative='-',
            value=value,
            name=receive_account.client.name,
            number=receive_account
        )

        historic = Historic.objects.create(
            account=receive_account,
            transaction='Pix',
            positive_negative='+',
            value=value,
            name=pay_account.client.name,
            number=pay_account
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
        times = request.data.get('times')
        value = request.data.get('value')
        account = get_object_or_404(Account, pk=id_account)

        installment_value = value / times

        loan = Loan.objects.create(
            account=account,
            installment_value=installment_value,
            times=times,
            value=value
        )

        historic = Historic.objects.create(
            account=account,
            transaction='Loan',
            positive_negative='+',
            value=value,
            installments = times,
            installment_value = installment_value,
            name='Bank',
            number='0000001'
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

        historic = Historic.objects.create(
            account=account,
            transaction='Investiments',
            positive_negative='-',
            value=value,
            name='Bank',
            number='0000001'
        )

        account.saldo -= value
        account.save()

class HistoricViewSet(viewsets.ModelViewSet):
    serializer_class = HistoricSerializer
    queryset = Historic.objects.all()

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if search:
            account = Historic.objects.filter(
                Q(account__number__icontains=search)
            ).distinct()
            return account
        else:
            return Historic.objects.all()

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