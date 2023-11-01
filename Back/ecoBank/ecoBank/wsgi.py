"""
WSGI config for ecoBank project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecoBank.settings')

application = get_wsgi_application()

path = '/home/JoaoPedro17/Banks/Back/ecoBank'
if path not in sys.path:
    sys.path.insert(0, path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'ecoBank.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
