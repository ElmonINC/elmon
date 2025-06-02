from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'folio/index.html'),

def index(request):
    context = {
        'web': "Welcome, I'm a passionate Full Stack Developer who turns ideas into powerful websites. Let's build something amazing!",
        'ux': "Ello, I create intuitive and engaging user experiences that delight your customers and drive results. Let's make your product user-friendly!",
        'gd': "Welcome, transform your brand with stunning visuals. I blend creativity with strategic design to make your business stand out."  
    }
    return render(request, 'folio/index.html', context) 

def matrix(request):
    return render(request, 'folio/templates.html')

def web_dev(request):
    return render(request, 'folio/web_dev.html')

def ui_ux(request):
    return render(request, 'folio/ui_ux.html')  

def grafics(request):
    return render(request, 'folio/grafics.html')  
