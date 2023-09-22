from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUsuarioChangeForm, CustomUsuarioCreateForm
from .models import Address, Phone, Email, NaturalPerson, LegalPerson, CustomUsuario

class AddressInline(admin.StackedInline):
    model = Address
    extra = 0

class EmailInline(admin.TabularInline):
    model = Email
    extra = 0

class PhoneInline(admin.TabularInline):
    model = Phone
    extra = 0

class NaturalPersonInline(admin.StackedInline):
    model = NaturalPerson
    extra = 0

class LegalPersonInline(admin.StackedInline):
    model = LegalPerson
    extra = 0

@admin.register(CustomUsuario)
class CustomUsuarioAdmin(UserAdmin):
    add_form = CustomUsuarioCreateForm
    form = CustomUsuarioChangeForm
    model = CustomUsuario
    list_display = ["identification_number", "photograph", "token"]

    fieldsets = [
        [
            None, {
                "fields": ["identification_number", "password", "token"]
            }
        ],
        [
            "Informações Pessoais", {
                "fields": ["photograph"]
            }
        ],
        [
            "Permissões", {
                "fields": ["is_staff", "is_superuser", "groups", "user_permissions"]
            }
        ],
        ["Datas", {
            "fields":["last_login", "date_joined"]
            }
        ],
    ]

    inlines = [AddressInline, EmailInline, PhoneInline, NaturalPersonInline, LegalPersonInline]

@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ['client', 'cep', 'city', 'street', 'neighborhood', 'uf']

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ['client', 'email']

@admin.register(Phone)
class PhoneAdmin(admin.ModelAdmin):
    list_display = ['client', 'phone', 'prefix_number', 'area_code']

@admin.register(NaturalPerson)
class NaturalPersonAdmin(admin.ModelAdmin):
    list_display = ['client', 'name', 'birthdate', 'cpf', 'rg']

@admin.register(LegalPerson)
class LegalPersonAdmin(admin.ModelAdmin):
    list_display = ['client', 'fantasy_name', 'establishment_date', 'cnpj', 'im', 'ie', 'legalNature' ]