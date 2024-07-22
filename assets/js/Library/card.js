function adjustCardHeights() {
  // Lấy tất cả các thẻ div có lớp 'card'
  const cards = document.querySelectorAll(".new-item__title");

  // Khởi tạo biến để lưu chiều cao tối đa
  let maxHeight = 0;

  // Tìm chiều cao lớn nhất
  cards.forEach((card) => {
    card.style.height = "auto"; // Reset height để tính toán chính xác
    const cardHeight = card.clientHeight; // Lấy chiều cao của thẻ
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });

  // Đặt chiều cao cho tất cả các thẻ
  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}

// Gọi hàm khi tải trang và khi thay đổi kích thước cửa sổ
window.addEventListener("load", adjustCardHeights);
window.addEventListener("resize", adjustCardHeights);
