from datetime import datetime

from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
import random


class UsuarioManager(BaseUserManager):
    use_in_migrations = True


    def _create_user(self, identification_number, password, **extra_fields):
        if not identification_number:
            raise ValueError('CPF is mandatory')
        user = self.model(identification_number=identification_number, username=identification_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, identification_number, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(identification_number, password, **extra_fields)

    def create_superuser(self, identification_number, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')

        return self._create_user(identification_number, password, **extra_fields)


class CustomUsuario(AbstractUser):
    identification_number = models.CharField('Identification Number', max_length=14, unique=True, primary_key=True)
    photograph = models.CharField('Photograph', max_length=400, blank=True)
    is_staff = models.BooleanField('Membro', default=True)
    token = models.CharField('Token', max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'identification_number'
    REQUIRED_FIELDS = ['photograph']

    def __str__(self):
        return f'{self.identification_number}'

    objects = UsuarioManager()

    groups = models.ManyToManyField(
        Group,
        verbose_name=('groups'),
        blank=True,
        related_name='custom_usuarios_groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=('user permissions'),
        blank=True,
        related_name='custom_usuarios_user_permissions',
    )


class NaturalPerson(models.Model):
    client = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name='client_naturalPerson')
    name = models.CharField('Name', max_length=80)
    birthdate = models.DateField()
    cpf = models.CharField('CPF', max_length=11, unique=True, blank=True, null=True)
    rg = models.CharField('RG', max_length=20, unique=True)

    def save(self, *args, **kwargs):
        self.cpf = self.client.identification_number
        self.client.photograph = self.name[0]
        self.client.save()
        super(NaturalPerson, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.cpf}'


class LegalPerson(models.Model):
    client = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name='client_legalPerson')
    fantasy_name = models.CharField('Fantasy Name', max_length=80)
    establishment_date = models.DateField()
    cnpj = models.CharField('CNPJ', max_length=14, unique=True,  blank=True, null=True)
    im = models.CharField('IM', max_length=20, unique=True)
    ie = models.CharField('IE', max_length=20, unique=True)
    legalNature = models.CharField('Legal Nature', max_length=80)

    def save(self, *args, **kwargs):
        self.cnpj = self.client.identification_number
        self.client.photograph = self.fantasy_name[0]
        self.client.save()
        super(LegalPerson, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.cnpj}'


class Address(models.Model):
    client = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='client_addresses')
    cep = models.CharField('CEP', max_length=8)
    city = models.CharField('City', max_length=80)
    street = models.CharField('Street', max_length=80)
    neighborhood = models.CharField('Neighborhood', max_length=80)
    uf = models.CharField('UF', max_length=2)

    def __str__(self):
        return self.cep


class Email(models.Model):
    client = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='client_emails')
    email = models.EmailField('E-mail', unique=True)

    def __str__(self):
        return self.email


class Phone(models.Model):
    client = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='client_phones')
    phone = models.CharField('Phone', max_length=10, unique=True)
    prefix_number = models.CharField('Prefix Number', max_length=2)
    area_code = models.CharField('Area Code', max_length=2)

    def __str__(self):
        return self.phone
    
class Account(models.Model):
    client = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='client_account')
    agency = models.CharField('Agency', max_length=4)
    number = models.CharField('Number', max_length=7, unique=True, blank=True, null=True)
    typee = models.CharField('Type', max_length=10)
    credit_limit = models.DecimalField("CreditLimit", max_digits=15, decimal_places=2)
    saldo = models.DecimalField("Saldo", max_digits=15, decimal_places=2)
    status = models.CharField('Status', max_length=10)

    """def save(self, resultado=None, *args, **kwargs):
        for i in range(0, 7):
            if i == 5:
                numeros = "-"
                resultado += str(numeros)
            numeros =  random.randint(0, 9)
            resultado += str(numeros)
        self.number = resultado 
        super(Account, self).save(*args, **kwargs)"""

    def __str__(self):
        return f'{self.number}'

class Card(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='account_card')
    number = models.CharField('Number', max_length=8)
    expiration_date = models.DateField()
    verification_number = models.CharField('Verification Number', max_length=3)
    status = models.CharField('Status', max_length=10)

    def __str__(self):
        return f'{self.number}'

class Transaction(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE, related_name='transaction_card')
    transaction_type = models.CharField('Type', max_length=20)
    date = models.DateField(null=True, blank=True)
    description = models.CharField('Description', max_length=100)
    value = models.DecimalField("Value", max_digits=15, decimal_places=2)

    def save(self, resultado=None, *args, **kwargs):
        now = datetime.now()
        self.date = now.date()
        super(Transaction, self).save(*args, **kwargs)
    def __str__(self):
        return f'{self.date}'

@receiver(post_save, sender=CustomUsuario)
def create_token_for_user(sender, instance, created, **kwargs):
    if created:
        token, created = Token.objects.get_or_create(user=instance)
        instance.token = token.key
        instance.save()