document.addEventListener('DOMContentLoaded', function () {
    const cvcButton = document.getElementById('tooltip');
    const cvcTooltipContent = document.getElementById('tooltiptext');

    const aliasButton = document.getElementById('payment-tooltip-alias');
    const aliasTooltipContent = document.getElementById('payment-tooltip-container-alias');

    const cobadgingButton = document.getElementById('payment-tooltip-cobadging');
    const cobadgingTooltipContent = document.getElementById('payment-tooltip-container-cobadging');

    function toggleTooltip(button, tooltipContent) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            tooltipContent.style.display = 'none';
            tooltipContent.style.opacity = '0';
            tooltipContent.style.zIndex = '-1';
            button.setAttribute('aria-expanded', 'false');
            tooltipContent.setAttribute('aria-hidden', 'true');
        } else {
            tooltipContent.style.display = 'block';
            tooltipContent.style.opacity = '1';
            tooltipContent.style.zIndex = '99';
            button.setAttribute('aria-expanded', 'true');
            tooltipContent.setAttribute('aria-hidden', 'false');
        }
    }

    cvcButton?.addEventListener('click', function () {
        toggleTooltip(cvcButton, cvcTooltipContent);
    });

    cvcTooltipContent?.addEventListener('click', function () {
        toggleTooltip(cvcButton, cvcTooltipContent);
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (cvcButton.getAttribute('aria-expanded') === 'true') {
                toggleTooltip(cvcButton, cvcTooltipContent);
            }
        }
    })

    aliasButton?.addEventListener('click', function () {
        toggleTooltip(aliasButton, aliasTooltipContent);
    });

    cobadgingButton?.addEventListener('click', function () {
        toggleTooltip(cobadgingButton, cobadgingTooltipContent);
    });
});
