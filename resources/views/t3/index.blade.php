<!DOCTYPE HTML>
<html lang="en">
	<head>
		{!!Theme::css('css/app.css')!!}
		{!!Theme::css('themes/flatlynw/css/main.css')!!}
		{!!Theme::css('themes/flatlynw/css/prism.css')!!}
   </head>
	<body>
		<h1> Greetings from "T3" theme  </h1>
		<ul>
			<li> This is the "{{Theme::get()}}" theme. </li>
			<li> This theme shares 'theme.css' but has its own 'img\test.gif' in the theme folder.			
			<li> This is an example of an image (located at: Theme::url('img\test.gif')): </li>
		</ul>
		<img src="{{Theme::url('img/test.gif')}}">

		@include('links')

	</body>
</html>