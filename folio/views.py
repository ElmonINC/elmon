from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'folio/index.html'),

def index(request):
    context = {
        'web': "Welcome to my page, I'm a passionate Full Stack Developer who turns ideas into powerful web solutions. Let's build something amazing together!",
        'ux': "I create intuitive and engaging user experiences that delight your customers and drive results.",
        'gd': "Welcome, transform your brand with stunning visuals. I blend creativity with strategic design to make your business stand out."
    }
    return render(request, 'folio/index.html', context)

def matrix(request):
    return render(request, 'folio/templates.html')
