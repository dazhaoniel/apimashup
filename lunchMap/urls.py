from django.conf.urls.defaults import *
from lunchMap.views import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url( r'^$', index, name='lunchMap_index'),
    url( r'^search/$', search, name='lunchMap_search'),
    
    # url(r'^panel/$', panel, name='twitterPanel_panel'),
    # url(r'^update/$', update, name='twitterPanel_update'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)), 
)
