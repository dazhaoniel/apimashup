# Create your views here.

from django.conf import settings
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.contrib.gis.maps.google.gmap import GoogleMap
from django.contrib.gis.maps.google.overlays import GMarker, GEvent

def google_map(request):
    points = [
        {'lat':'35.42',     'lng': '139.42', 'href':'http://en.wikipedia.org/wiki/Tokyo'},]
#        {'lat':'51.30',     'lng':   '0.73', 'href':'http://en.wikipedia.org/wiki/London'},
#        {'lat':'40.43',     'lng': '-74.0',  'href':'http://en.wikipedia.org/wiki/New_York_City'},
#        {'lat':'34.03',     'lng':'-118.15', 'href':'http://en.wikipedia.org/wiki/Los_Angeles'},
#        {'lat':'36.774402', 'lng':'-119.755405', 'href':'http://en.wikipedia.org/wiki/Fresno'},]
    markers = []
    for point in points:
        marker = GMarker('POINT(%s %s)' % (point['lng'], point['lat']))
        event = GEvent('click', 'function() { location.href = "%s"}' % point['href'])
        marker.add_event(event)
        markers.append(marker)
    google = GoogleMap(center=('38.262985', '140.873508'), zoom=12, markers=markers,
                       key=settings.GOOGLE_MAPS_API_PASSWORD)
    return render_to_response('google_maps.html',
                              {'google': google,})
                              
def index(request):
    'Display map'
    return render_to_response('google_maps.html',{
    })
    
def search_form(request):
    return render_to_response('search_form.html')
