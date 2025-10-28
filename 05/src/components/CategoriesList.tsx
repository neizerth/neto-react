const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

import { useState, useEffect } from 'react';

type Category = {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
}

export function CategoriesList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Category[]>([]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json()
        setData(json.categories);
      }
      catch(e) {
      }

      setLoading(false);
    })()
  }, []);

  return (
    <>
      {loading && <span>Загрузка...</span>}
      <div className='list'>
        {data.map(category => (
          <div key={category.idCategory} className='list__item'>
            {category.strCategory}
          </div>
        ))}
      </div>
    </>
  )

}