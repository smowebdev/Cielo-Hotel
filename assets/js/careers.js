$('details').each(function () {
    const $details = $(this);
    const $summary = $details.find('summary');

    $summary.on('click', function (e) {
        e.preventDefault();

        if ($details.prop('open')) {
            $details.addClass('closing');

            setTimeout(function () {
                $details.prop('open', false);
                $details.removeClass('closing');
            }, 400);
        } else {
            $details.prop('open', true);
        }
    });
});