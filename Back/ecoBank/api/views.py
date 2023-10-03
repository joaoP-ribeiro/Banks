from django.shortcuts import render
from django.shortcuts import render

from django.db.models import Q
from rest_framework import viewsets
from .models import CustomUsuario, NaturalPerson, Email, Phone, LegalPerson, Address, Account, Card
from .serializer import ClientSerializer, EmailSerializer, PhoneSerializer, AddressSerializer, NaturalPersonSerializer, LegalPersonSerializer, AccountSerializer, CardSerializer
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