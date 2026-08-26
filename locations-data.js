// City coverage data for ip-locations.html (?city=<slug>)
const CITY_LOCATIONS = [
  { slug: "ahmedabad", name: "Ahmedabad" },
  { slug: "vadodara", name: "Vadodara" },
  { slug: "surat", name: "Surat" },
  { slug: "rajkot", name: "Rajkot" },
  { slug: "bhavnagar", name: "Bhavnagar" },
  { slug: "mehsana", name: "Mehsana" },
  { slug: "palanpur", name: "Palanpur" },
  { slug: "gandhinagar", name: "Gandhinagar" },
  { slug: "vapi", name: "Vapi" },
  { slug: "jamnagar", name: "Jamnagar" },
  { slug: "morbi", name: "Morbi" },
  { slug: "junagadh", name: "Junagadh" },
  { slug: "gandhidham", name: "Gandhidham" },
  { slug: "anand", name: "Anand" },
  { slug: "navsari", name: "Navsari" },
  { slug: "nadiad", name: "Nadiad" },
  { slug: "surendranagar", name: "Surendranagar" },
  { slug: "bharuch", name: "Bharuch" },
  { slug: "bhuj", name: "Bhuj" },
  { slug: "porbandar", name: "Porbandar" },
  { slug: "valsad", name: "Valsad" }
];

(function () {
  function renderCityPage() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("city");
    var city = CITY_LOCATIONS.find(function (c) { return c.slug === slug; }) || CITY_LOCATIONS[0];
    document.title = "Patent and Trademark Registration Service in " + city.name + " | Excelon IP";

    document.querySelectorAll("[data-city-name]").forEach(function (el) {
      el.textContent = city.name;
    });

    var chips = document.getElementById("city-chips");
    if (chips) {
      CITY_LOCATIONS.forEach(function (c) {
        var a = document.createElement("a");
        a.href = "ip-locations.html?city=" + c.slug;
        a.className = "sidebar-link" + (c.slug === city.slug ? " active" : "");
        a.textContent = c.name;
        chips.appendChild(a);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCityPage);
  } else {
    renderCityPage();
  }
})();
