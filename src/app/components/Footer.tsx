export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl mb-2">Михаил Викторов</h3>
            <p className="text-gray-400">Тренер по боксу и тайскому боксу</p>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
