interface User {
  name: string
  lastName: string
}

export function getUserName(user: User) {
	return user.name;
}

getUserName({
  name: 'Vladimir',
  lastName: 'Yazykov'
})