from django.conf.urls import include, url


urlpatterns = [
    url(r'^horse/', include('accountsapi.horse.urls')),
]
