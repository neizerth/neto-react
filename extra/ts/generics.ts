/* 
  Pagination<Person> -> {
    total: number
    data: Person[]
    page: number
  }

  Pagination<News> -> {
    total: number
    data: News[]
    current: number
  }

*/

type Pagination<T> = {
  total: number
  current: number;
  data: T[]
}

type Person = {
  name: string;
  lastName: string
}

type OldPersonPagination = {
  total: number
  current: number;
  data: Person[]
}

type PersonPagination = Pagination<Person>


type News = {
  id: string;
  title: string;
  description: string
}

type OldNewsPagination = {
  total: number
  current: number;
  data: News[]
}

type NewsPagination = Pagination<News>
