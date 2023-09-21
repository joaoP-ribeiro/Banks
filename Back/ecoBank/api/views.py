from django.shortcuts import render
from django.shortcuts import render

from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, serializers
from .models import CustomUsuario, NaturalPerson, Email, Phone, LegalPerson, Anddress
from .serializer import ClientSerializer, EmailSerializer, PhoneSerializer, AnddressSerializer, NaturalPersonSerializer, LegalPersonSerializer
from rest_framework.permissions import IsAuthenticated


class EmailView(viewsets.ModelViewSet):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()

class PhoneView(viewsets.ModelViewSet):
    serializer_class = PhoneSerializer
    queryset = Phone.objects.all()

class AnddressView(viewsets.ModelViewSet):
    serializer_class = AnddressSerializer
    queryset = Anddress.objects.all()

class AnddressView(viewsets.ModelViewSet):
    serializer_class = AnddressSerializer
    queryset = Anddress.objects.all()

class NaturalPersonView(viewsets.ModelViewSet):
    serializer_class = NaturalPersonSerializer
    queryset = NaturalPerson.objects.all()

class LegalPersonView(viewsets.ModelViewSet):
    serializer_class = LegalPersonSerializer
    queryset = LegalPerson.objects.all()

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # search = self.request.query_params.get('search')
        # if search:
        #     clients = CustomUsuario.objects.filter(
        #         Q(identification_number=search) |  
        #         Q(email__email__icontains=search) | 
        #         Q(phone__phone__icontains=search)  
        #     ).distinct()

        #     return clients
        # else:
        return CustomUsuario.objects.filter(user=self.request.user)