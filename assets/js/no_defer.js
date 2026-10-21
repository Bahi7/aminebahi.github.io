// add bootstrap classes to tables
$(document).ready(function () {
  // Follow the theme actually applied to the page (set by theme.js when dark mode is enabled).
  // When dark mode is disabled the page is always light, so tables must stay light too,
  // whatever the visitor's system preference is.
  const pageIsDark = document.documentElement.getAttribute("data-theme") == "dark";
  $("table").each(function () {
    if (pageIsDark) {
      $(this).addClass("table-dark");
    } else {
      $(this).removeClass("table-dark");
    }

    // only select tables that are not inside an element with "news" (about page) or "card" (cv page) class
    if (
      $(this).parents('[class*="news"]').length == 0 &&
      $(this).parents('[class*="card"]').length == 0 &&
      $(this).parents('[class*="archive"]').length == 0 &&
      $(this).parents("code").length == 0
    ) {
      // make table use bootstrap-table
      $(this).attr("data-toggle", "table");
      // add some classes to make the table look better
      // $(this).addClass('table-sm');
      $(this).addClass("table-hover");
    }
  });
});
