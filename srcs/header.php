<header>
	<div id="top-bar">
		<h2 class="title-logo"><a href="/index.php">Actions Citoyennes</a></h2>
		<section class="selection">
		<ul id="user-data">
		<?php
		if (isset($canConnect) && $canConnect === true)
		{
			echo '
				<li class="button-m1"><a href="/srcs/log_in.php">Connexion</a></li>
				<li class="button-m1"><a href="/srcs/sign_up.php">Inscription</a></li>
			</ul>' ;
		}
		?>
		<nav id="menu-site">
			<ul>
				<li class="button-m1"><a href="#">Actions</a></li>
			</ul>
		</nav>
		<section>
	</div>
</header>
