var _a, _b, _c;
{
    var thumbnails_1 = document.querySelectorAll('.thumbnail');
    var mainImage_1 = document.getElementById('main-image');
    (_a = thumbnails_1[0]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        if (mainImage_1 && 'src' in mainImage_1 && 'src' in thumbnails_1[0])
            mainImage_1.src = thumbnails_1[0].src;
        thumbnails_1[0].classList.add('active');
        thumbnails_1[1].classList.remove('active');
        thumbnails_1[2].classList.remove('active');
    });
    (_b = thumbnails_1[1]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        if (mainImage_1 && 'src' in mainImage_1 && 'src' in thumbnails_1[1])
            mainImage_1.src = thumbnails_1[1].src;
        thumbnails_1[0].classList.remove('active');
        thumbnails_1[1].classList.add('active');
        thumbnails_1[2].classList.remove('active');
    });
    (_c = thumbnails_1[2]) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        if (mainImage_1 && 'src' in mainImage_1 && 'src' in thumbnails_1[2])
            mainImage_1.src = thumbnails_1[2].src;
        thumbnails_1[0].classList.remove('active');
        thumbnails_1[1].classList.remove('active');
        thumbnails_1[2].classList.add('active');
    });
}
