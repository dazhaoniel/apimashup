# Create your views here.
import sys
import urllib
from xml.dom.minidom import parseString
from django.conf import settings
from django.shortcuts import render_to_response
from django.template.loader import render_to_string
from django.template.context import RequestContext
from django.contrib.gis.maps.google.gmap import GoogleMap
from django.contrib.gis.maps.google.overlays import GMarker, GEvent
from lunchMap.models import Restaurant

def search(request):
	search_restaurants(request)
	'Display map'
	darts = Restaurant.objects.order_by('cat')
    	return render_to_response('google_maps.html',{
    		'darts': darts,
    		'content':render_to_string('darts.html',{'darts':darts}),
    	})
   	                          
                              
def index(request):
    	'Display map'
#    	darts = Restaurant.objects.order_by('name')
    	return render_to_response('google_maps.html')
    	
    	
def search_restaurants(request):
	f_url = urllib.urlopen(
		"http://api.tabelog.com/Ver2.1/RestaurantSearch/?PageNum=60&%s" %
		urllib.urlencode(
			{"key"    : "e7a7156cb666373d11a3faca6d6bae5f431f379c",         
			 "Prefecture": request.GET['prefecture'],
			 "Station": request.GET['station'],
			 "ResultSet": "large"		                    
			 } )
		)

	dom = parseString( f_url.read() )
	xmlname = dom.getElementsByTagName('RestaurantName')
	xmllat = dom.getElementsByTagName('Latitude')
	xmllng = dom.getElementsByTagName('Longitude')
	xmlcat = dom.getElementsByTagName('Category')
	xmlurl = dom.getElementsByTagName('TabelogUrl')
	
	var = 0
	for latitude in xmllat:
		Restaurant( name = xmlname[var].toxml().replace('<RestaurantName>','').replace('</RestaurantName>',''), lat = latitude.toxml().replace('<Latitude>','').replace('</Latitude>',''), lng = xmllng[var].toxml().replace('<Longitude>','').replace('</Longitude>',''), url = xmlurl[var].toxml().replace('<TabelogUrl>','').replace('</TabelogUrl>',''), cat = xmlcat[var].toxml().replace('<Category>','').replace('</Category>','') ).save()
		var += 1
		
	return 
