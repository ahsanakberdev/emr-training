function toggleFaq(button) {
	const answer = button.nextElementSibling;
	const icon = button.querySelector('.faq-icon');
	const isOpen = answer.classList.contains('open');
	
	// Close all other FAQ items
	document.querySelectorAll('.faq-answer').forEach(item => {
		item.classList.remove('open');
	});
	document.querySelectorAll('.faq-question').forEach(item => {
		item.classList.remove('active');
	});
	document.querySelectorAll('.faq-icon').forEach(item => {
		item.classList.remove('rotated');
	});
	
	// Toggle current item
	if (!isOpen) {
		answer.classList.add('open');
		button.classList.add('active');
		icon.classList.add('rotated');
	}
}

