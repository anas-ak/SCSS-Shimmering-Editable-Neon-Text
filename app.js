//Autoupdate the data-text if you wish to edit directly on page

        $('[data-text]').on('keyup', function() {
            $(this).attr('data-text', $(this).text());
        });