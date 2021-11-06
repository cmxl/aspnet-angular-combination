var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();
app.UseEndpoints(x => x.MapControllers());

// when navigating to routes not handled by mvc
// this fallback will be called and angulars router takes over
app.MapFallbackToFile("index.html"); 

app.Run();
