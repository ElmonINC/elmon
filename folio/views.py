from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'folio/index.html')

def matrix(request):
    return render(request, 'folio/templates.html')