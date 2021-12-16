let  bahasa = {
    "eng": {
        "title"             : "Did You Know ?",
        "subtitle_cover"    : "Since the 1970s, teh popularity of palm oil has continued to soar wth many positive impact on Indonesia, such as",
        "desc"              : "&nbsp;&nbsp;&nbsp;Along with the development of the times, this industry is aware of the importance of ecosystem balance in Indonesia's forests. Thus the creation of ISPO or Indonesian Sustainable Palm Oil in 2001. The ISPO Principles and Criteria for Sustainable Palm Oil Production (P&C ISPO) is a global guide for sustainable palm oil production in Indonesia.<br><br>&nbsp;&nbsp;&nbsp; This certification arises because of concerns on future negative impacts towards the ecosystems, biodiversity and the potential increase in Indonesia’s greenhouse gases. Palm oil production is not malicious activity that only brings negative impact for the society, <span class=\"myBolder\">WHEN PROCESSED CORRECTLY!</span>",
        "campaign"          : "We hear and care about the current state of Indonesia's nature by promoting a social awareness campaign. Together with the <span class\"mybolder\">#KENALILEBIHDEKAT campaign, we are committed to providing proper education about the palm oil industry.",
        "keuntungan"        : "Advantages of using palm oil products over other products",
        "sertifikasi"       : "This certification arises because of concerns about the negative impact that will occur in the future on ecosystems, biodiversity and the increase in the greenhouse effect. Palm oil is neither an industry nor a malicious activity that only brings negative impacts to society. The palm oil industry has a lot profitable <span class=\"mybolder\">POTENTIAL</span>, <span class=\"mybolder\">IF PROPERLY PROCESSED!</span>",        
        "keuntungan1"       : "Some palm oil products in daily life and their benefits",
        "keuntungan2"       : "Wrong perspective on the palm oil industry and also the facts",
        "keuntungan3"       : "The potential to earn income from the palm oil industry that anyone can do",      
        "contact_desc"      : "<p>Those are just some of the topics the community will cover <span class=\"bolder\">PROUD TO BE SUSTAINABLE</span><br>(and will continue to grow over time) .</p><p>Want to be a part of this education and change?</p><p>Come and join our <span class=\"bolder\">TELEGRAM</span> community group with <span class=\"bolder\">FREE</span></p>",
        "dampak1"           : "The diversity of palm oil derivative products and their various benefits for everyday life.",
        "dampak2"           : "Extensive job field.",
        "dampak3"           : "Contribution to the country's foreign exchange for palm oil exports."
    
    },
    "indo" :{
        "title"             : "Tahukan Anda ?",
        "subtitle_cover"    : "Sejak  tahun 1970 an, popularitas kelapa sawit terus melejit dengan membawa banyak dampak positif bagi Indonesia, seperti",
        "desc"              : "&nbsp;&nbsp;&nbsp;Seiring berkembangnya zaman, industri ini sadar akan pentingnya keseimbangan  ekosistem pada hutan Indonesia. ISPO atau Indonesian Sustainable Palm Oil pun akhirnya diciptakan pada tahun 2001.Principle and Criteria ISPO untuk Sustainable Palm Oil Production ( P&C ISPO ) merupakan panduan global untuk produksi minyak sawit secara berkelanjutan di Indonesia<br><br>.&nbsp;&nbsp;&nbsp; Sertifikasi ini muncul karena kekhawatiran akan dampak buruk yang akan terjadi kedepannya atas ekosistem, keanekaragaman hayati dan peningkatan efek rumah kaca yang akan terjadi di Indonesia nantinya. Kelapa sawit bukanlah sebuah industri ataupun aktivitas jahat yang hanya membawa dampak negatif ke masyarakat. Industri kelapa sawit memiliki banyak sekali POTENSI yang menguntungkan. <span class=\"mybolder\">JIKA DIOLAH DENGAN BENAR !</span>",
        "campaign"          : "Kami mendengar dan peduli atas keadaan alam Indonesia saat ini dengan menggalakan sebuah kampanye sosial.Bersama kampanye <span class=\"mybolder\">#KENALILEBIHDEKAT</span>, kami berkomitmen untuk memberi edukasi yang benar tentang industry kelapa sawit.<br><br> Beberapa poin yang akan menjadi focus komunitas ini yaitu : ",
        "keuntungan"        : "Keuntungan menggunakan produk kelapa sawit dibandingkan produk lainnya",
        "sertifkasi"        : "Sertifikasi ini muncul karena kekhawatiran akan dampak buruk yang akan terjadi kedepannya atas ekosistem, keanekaragaman hayati dan peningkatan efek rumah kaca. Kelapa sawit bukanlah sebuah industri atau pun aktivitas jahat yang hanya membawa dampak negative  ke masyarakat. Industri kelapa sawit memiliki banyak sekali <span class=\"mybolder\">POTENSI</span> yang menguntungkan, <span class=\"mybolder\">JIKA DIOLAH DENGAN BENAR!</span>",            
        "keuntungan1"       : "Beberapa produk kelapa sawit di kehidupan sehari hari dan manfaatnya",
        "keuntungan2"       : "Pola pandang yang salah tentang industry kelapa sawit dan juga faktanya",
        "keuntungan3"       : "Potensi mendapatkan penghasilan dari industri kelapa sawit yang bisa dilakukan siapa saja",
        "contact_desc"      : "<p>Itu baru sebagian dari topik yang akan dibahas oleh komunitas <span class=\"bolder\">PROUD TO BE SUSTAINABLE</span><br>(dan akan terus bertambah seiring berjalannya waktu).</p><p>Ingin menjadi bagian dari edukasi dan perubahan ini ?</p><p>Yuk Join grup <span class=\"bolder\">TELEGRAM</span> komunitas kami secara <span class=\"bolder\">GRATIS</span></p>",
        "dampak1"           : "Keberagaman produk turunan kelapa sawit dan berbagai manfaatnya bagi kehidupan sehari - hari.",
        "dampak2"           : "Lapangan pekerjaan yang luas.",
        "dampak3"           : "Pemberi kontribusi untuk devisa negara terhadap ekspor sawit."
    }
}


function eng(){
    $("#title").html(bahasa.eng.title);
    $("#subtitle_cover").html(bahasa.eng.subtitle_cover);
    $("#desc").html(bahasa.eng.desc);
    $("#campaign").html(bahasa.eng.campaign);
    $("#sertifikasi_d").html(bahasa.eng.sertifikasi);
    $("#keuntungan").html(bahasa.eng.keuntungan);
    $("#keuntungan1").html(bahasa.eng.keuntungan1);
    $("#keuntungan2").html(bahasa.eng.keuntungan2);
    $("#keuntungan3").html(bahasa.eng.keuntungan3);
    $("#contact_desc").html(bahasa.eng.contact_desc)
    $("#dampak1").html(bahasa.eng.dampak1);
    $("#dampak2").html(bahasa.eng.dampak2);
    $("#dampak3").html(bahasa.eng.dampak3); 
    $("#bahasa").html('Language :');     
}

function ind(){
    $("#title").html(bahasa.indo.title);
    $("#subtitle_cover").html(bahasa.indo.subtitle_cover);
    $("#desc").html(bahasa.indo.desc);
    $("#campaign").html(bahasa.indo.campaign);
    $("#sertifikasi_d").html(bahasa.indo.sertifikasi);
    $("#keuntungan").html(bahasa.indo.keuntungan);
    $("#keuntungan1").html(bahasa.indo.keuntungan1);
    $("#keuntungan2").html(bahasa.indo.keuntungan2);
    $("#keuntungan3").html(bahasa.indo.keuntungan3);
    $("#contact_desc").html(bahasa.indo.contact_desc)
    $("#dampak1").html(bahasa.indo.dampak1);
    $("#dampak2").html(bahasa.indo.dampak2);
    $("#dampak3").html(bahasa.indo.dampak3);  
    $("#bahasa").html('Bahasa :');     
}

function getLocation(){    
    $.get('http://www.geoplugin.net/json.gp', function(data) {
      if  (data.geoplugin_countryName == 'Indonesia'){
        $(".change-language select").val("1").change();
        ind();
    }else{
          $(".change-language select").val("2").change();
        eng();
      }
    });

    return bahasa;
}