from django.urls import path
from rest_framework import routers
from .views import save_contact
from django.views.generic import RedirectView

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', RedirectView.as_view(url='/api-auth/login/?next=/contact/', permanent=True)),
    path('contact/', save_contact, name='save_contact'),
]