$(document).ready(function () {
  /*
   * FAQ Accordion
   */
  $(".faq-main__item").first().addClass("is-active");
  $(".faq-main__item").first().find(".faq-main__answer").show();
  $(".faq-main__question").on("click", function () {
    const $item = $(this).closest(".faq-main__item");
    const $answer = $item.find(".faq-main__answer");

    if ($item.hasClass("is-active")) {
      $answer.stop(true, true).slideUp(300);
      $item.removeClass("is-active");
      return;
    }

    $(".faq-main__item.is-active")
      .removeClass("is-active")
      .find(".faq-main__answer")
      .stop(true, true)
      .slideUp(300);

    $item.addClass("is-active");

    $answer.stop(true, true).slideDown(300);
  });

  /*
   * FAQ Search
   */
  let faqSearchTimeout;

  $(".faq-main__search-input").on("input", function () {
    const $input = $(this);

    clearTimeout(faqSearchTimeout);

    faqSearchTimeout = setTimeout(function () {
      const keyword = $input.val().toLowerCase().trim();

      let resultCount = 0;

      $(".faq-main__item").each(function () {
        const $item = $(this);

        const question = $item.find(".faq-main__title").text().toLowerCase();
        const answer = $item.find(".faq-main__answer").text().toLowerCase();

        const content = question + " " + answer;

        if (!keyword || content.includes(keyword)) {
          $item.show();
          resultCount++;
        } else {
          $item
            .removeClass("is-active")
            .find(".faq-main__answer")
            .stop(true, true)
            .slideUp(200);

          $item.hide();
        }
      });

      if (keyword && resultCount === 0) {
        $(".faq-main__no-result").stop(true, true).slideDown(200);
      } else {
        $(".faq-main__no-result").stop(true, true).slideUp(200);
      }
    }, 300);
  });
});
