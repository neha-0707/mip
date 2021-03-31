# from django.conf.urls import url
# from UserApp import views

# urlpatterns = [
#     url(r'^user/$',views.userApi),
#     url(r'^user/([0-9]+)$',views.userApi)
# ]

from django.urls import path
from . import views

urlpatterns = [
    path('stock', views.index, name='stock'),
    path('stocks', views.stocks, name='stocks'),
    path('gainers', views.gainers, name='gainers'),
    path('losers', views.losers, name='losers'),
    path('registration', views.registration, name='rgistration')
]
