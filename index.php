<!DOCTYPE html>

<?php if (is_user_logged_in()) { ?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" class="wpadmin-logged-in">
<?php } else { ?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<?php } ?>

<?php include('header.php'); ?>

  <body>

    <main>

      <h1>Home Page</h1>

      <p>This content is hard-coded into the `index.php` file in the root of the theme directory.</p>

    </main>

    <?php include('footer.php'); ?>

  </body>

</html>