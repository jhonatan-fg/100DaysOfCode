dineroCofla = prompt ("¿cuanto dinero tienes cofla?");
dineroRoberto = prompt ("¿cuanto dinero tienes roberto?");
dineroPedro = prompt ("¿cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla)
dineroRoberto = parseInt(dineroRoberto)
dineroPedro = parseInt(dineroPedro)

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla, comprate el helado de agua")
    alert("y te sobran" + (dineroCofla - 0.6))
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert ("cofla, comprate el helado de crema")
    alert("y te sobran" + (dineroCofla - 1))
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert ("cofla, comprate el helado de fresa")
    alert("y te sobran" + (dineroCofla - 1.6))
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert ("cofla, comprate el helado de nuez")
    alert("y te sobran" + (dineroCofla - 1.7))
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert ("cofla, comprate el helado de fruta")
    alert("y te sobran" + (dineroCofla - 1.8))
} else if (dineroCofla >= 2.9) {
    alert ("cofla, comprate el helado de chocolate")
    alert("y te sobran" + (dineroCofla - 2.9))
} else {
    alert ("cofla, lo siento, ne te alcanza para ningun helado")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("roberto, comprate el helado de agua")
    alert("y te sobran" + (dineroRoberto - 0.6))
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert ("roberto, comprate el helado de crema")
    alert("y te sobran" + (dineroRoberto - 1))
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert ("roberto, comprate el helado de fresa")
    alert("y te sobran" + (dineroRoberto - 1.6))
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert ("roberto, comprate el helado de nuez")
    alert("y te sobran" + (dineroRoberto - 1.7))
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert ("roberto, comprate el helado de fruta")
    alert("y te sobran" + (dineroRoberto - 1.8))
} else if (dineroRoberto >= 2.9) {
    alert ("roberto, comprate el helado de chocolate")
    alert("y te sobran" + (dineroRoberto - 2.9))
} else {
    alert ("roberto, lo siento, ne te alcanza para ningun helado")
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("pedro, comprate el helado de agua")
    alert("y te sobran" + (dineroPedro - 0.6))
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert ("pedro, comprate el helado de crema")
    alert("y te sobran" + (dineroPedro - 1))
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert ("pedro, comprate el helado de fresa")
    alert("y te sobran" + (dineroPedro - 1.6))
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert ("pedro, comprate el helado de fruta")
    alert("y te sobran" + (dineroPedro - 1.7))
} else if (dineroPedro >= 2.9) {
    alert ("pedro, comprate el helado de chocolate")
    alert("y te sobran" + (dineroPedro - 2.9))
} else {
    alert ("pedro, lo siento, ne te alcanza para ningun helado")
}
