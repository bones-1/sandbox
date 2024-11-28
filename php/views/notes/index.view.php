<?php
require(__DIR__ . '/../partials/head.php');

require(__DIR__ . '/../partials/nav.php');

require(__DIR__ . '/../partials/banner.php');
?>


<main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ol class="list-decimal list-inside">
            <?php foreach ($notes as $note): ?>
                <li>
                    <a href="/note?id=<?= $note['id'] ?>">
                        <span class='text-blue-900 hover:underline'><?= htmlspecialchars($note['body']) ?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ol>
        <p class="mt-6">
            <a href="/notes/create" class="text-blue-500 hover:underline">Create Note</a>
        </p>
    </div>
</main>

<?php require(__DIR__ . '/../partials/footer.php') ?>