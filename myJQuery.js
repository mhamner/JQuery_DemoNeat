 $(document).ready(function() 
        {

          $('li').on('click', function()
          {
            //$(this).next().fadeToggle();
            //$(this).addClass('special');
            //$(this).closest('.list').addClass('special');
            if($(this).is('.special'))
            {
              alert('special');
            }
      
          });      
          
          //Demo finding the first li and adding the 'special' CSS class to it
          $('.list').on('click', function()
          {
            $(this).find('li').filter(':first').addClass('special');
          });

          //Demo finding all elements in the list with the 'special' CSS class and removing the class, making it normal again
          $("#btn1").on('click', function()
          {
            $(".list").find('.special').removeClass();
          });

          //Demo hiding li's IF they are in the sublist, but not if they are in the main list
          $('li').on('click', function()
          {
            if($(this).parent().is('.sublist'))
            {
              $(this).hide();
            }
          });

          

            
        });