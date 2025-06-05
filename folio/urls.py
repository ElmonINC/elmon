from django.urls import path
from . import views

app_name = 'folio' # This is the namespace for the app, allowing you to use 'folio:index' in templates and views.
urlpatterns = [
    path('', views.index, name='index'),
    path('matrix/', views.matrix, name='matrix'),
    path('web', views.web_dev, name='web_dev'),
    path('ui_ux', views.ui_ux, name='ui_ux'),
    path('about', views.index, name='about'),
    path('grafics', views.grafics, name='grafics'),
] 