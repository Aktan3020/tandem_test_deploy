from django.urls import path
from . import views
# from django.conf.urls import handler404

urlpatterns = [
    path('<slug:slug>/', views.index, name='index'),
    path('', views.index, name='index_no_slug'),  # This is the URL for the case without a slug
    path('quiz',views.quiz, name='quiz'),
    # Other URL patterns
]

# handler404 = 'apps.base.views.errors'