import { useEffect, useState } from "react";
import PropTypes from "prop-types";

Categories.propTypes = {
  monthName: PropTypes.string.isRequired
}


export default function Categories({monthName}) {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    // Função para carregar os dados do JSON ou criar um arquivo padrão se não existir
    const loadCategoriesData = async () => {
      try {
        // Tente carregar o JSON
        const response = await fetch("../../public/categories.json");
        if (response.ok) {
          const data = await response.json();
          // Filtrar os dados pelo mês
          const filteredData = data.filter(category => category.month === monthName);
          setCategoriesData(filteredData);
        } else {
          // Se o arquivo não existir, crie um arquivo padrão e carregue
          const defaultData = [
            { id: 1, name: "Moradia", value: 0 },
            { id: 2, name: "Alimentação", value: 0 },
            { id: 3, name: "Transporte", value: 0 },
            // Adicione mais categorias conforme necessário
          ];
          setCategoriesData(defaultData);
          saveCategoriesToJson(defaultData);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    loadCategoriesData();
  }, [monthName]);

  const saveCategoriesToJson = async (data) => {
    try {
      // Salve os dados em um arquivo JSON
      const response = await fetch("/path/to/categories.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Erro ao salvar os dados JSON");
      }
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categoriesData.map((category) => (
          <li key={category.id}>
            {category.name} - {category.value}
          </li>
        ))}
      </ul>
    </div>
  );
}