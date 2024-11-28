<?php
require(__DIR__ . '/../partials/head.php');

require(__DIR__ . '/../partials/nav.php');

require(__DIR__ . '/../partials/banner.php');
?>


<main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p class='text-blue-900 hover:underline mb-6'>
            <a href="/notes">go back...</a>
        </p>

        <p><?= htmlspecialchars($note['body']) ?></p>
    </div>
</main>

<?php require(__DIR__ . '/../partials/footer.php') ?>