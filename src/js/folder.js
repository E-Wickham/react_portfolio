jQuery(document).ready(function () {
    
    $('#web-projects').hover(
        function(){
            $(this).css("background-color", "pink");
            $(this).css("z-index","1");
            $('#folderBody').css("background-color", "pink");
            //set behind folder body
            $('#scripts').css("z-index","-1");
            $('#web-design').css("z-index","-1");
            $('#misc').css("z-index","-1");
            //change the colour back to default
            $('#scripts').css("background-color", "#E3E0AF");
            $('#web-design').css("background-color", "#E3E0AF");
            $('#misc').css("background-color", "#E3E0AF");
            //show web-projects portfolio content and hide the others
            $('#web-projects-folder-content').show();
            $('#web-design-folder-content').hide();
            $('#script-folder-content').hide();
            $('#misc-folder-content').hide();

            }, function(){
            $('#scripts').css("z-index","1");
            $('#web-design').css("z-index","1");
            $('#misc').css("z-index","1");
        }
    )
    $('#scripts').hover(
        function(){
            $(this).css("background-color", "#A2E4B8");
            $(this).css("z-index","1");
            $('#folderBody').css("background-color", "#A2E4B8");
            $('#web-projects').css("z-index","-1");
            $('#web-design').css("z-index","-1");
            $('#misc').css("z-index","-1");
            $('#web-projects').css("background-color", "#E3E0AF");
            $('#web-design').css("background-color", "#E3E0AF");
            $('#misc').css("background-color", "#E3E0AF");
            //show web-projects portfolio content and hide the others
            $('#script-folder-content').show();
            $('#web-projects-folder-content').hide();
            $('#web-design-folder-content').hide();
            $('#misc-folder-content').hide();
            }, function(){
            $('#web-projects').css("z-index","1");
            $('#web-design').css("z-index","1");
            $('#misc').css("z-index","1");
        }
    )
    $('#web-design').hover(
        function(){
            $(this).css("background-color", "skyblue");
            $('#folderBody').css("background-color", "skyblue");
            $('#web-projects').css("z-index","-1");
            $('#scripts').css("z-index","-1");
            $('#misc').css("z-index","-1");
            $('#web-projects').css("background-color", "#E3E0AF");
            $('#scripts').css("background-color", "#E3E0AF");
            $('#misc').css("background-color", "#E3E0AF");
            $('#web-design-folder-content').show();
            $('#web-projects-folder-content').hide();
            $('#script-folder-content').hide();
            $('#misc-folder-content').hide();

            }, function(){
            $('#web-projects').css("z-index","1");
            $('#scripts').css("z-index","1");
            $('#misc').css("z-index","1");
        }
    )
    $('#misc').hover(
        function(){
            $(this).css("background-color", "#FFDF9E");
            $('#folderBody').css("background-color", "#FFDF9E");
            //drop the 
            $('#web-projects').css("z-index","-1");
            $('#scripts').css("z-index","-1");
            $('#web-design').css("z-index","-1");
            //change the colour back to default
            $('#web-projects').css("background-color", "#E3E0AF");
            $('#scripts').css("background-color", "#E3E0AF");
            $('#web-design').css("background-color", "#E3E0AF");
            //show misc items and hide the rest
            $('#misc-folder-content').show();
            $('#web-design-folder-content').hide();
            $('#web-projects-folder-content').hide();
            $('#script-folder-content').hide();
            }, function(){
            $('#web-projects').css("z-index","1");
            $('#scripts').css("z-index","1");
            $('#web-design').css("z-index","1");
        }
    )

// MODALS
$('#about').click(
    function(){
    $('#aboutModal').modal('show');
    });

$('#buzzsprout').click(
    function(){
    $('#buzzsproutModal').modal('show');
    });

$('#moviehub').click(
    function(){
    $('#moviehubModal').modal('show');
    });

$('#bromono').click(
    function(){
    $('#bromonoModal').modal('show');
    });
$('#breadbox').click(
    function(){
    $('#breadboxModal').modal('show');
    });
$('#webscraper').click(
    function(){
    $('#webscraperModal').modal('show');
    });
$('#imagemaker').click(
    function(){
    $('#igModal').modal('show');
    });
$('#passage').click(
    function(){
    $('#passageModal').modal('show');
    });
$('#macleans').click(
    function(){
    $('#macleansModal').modal('show');
    });
$(responsiveCarousel).click(
    function(){
    $('#carouselModal').modal('show');
    });
});
