const API_KEY = '2470f0f03bff6392514b988690ad269b'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

// axios.get(URL)
//     .then(response => {
//         const movies = response.data.results
//     })

// 1. 빈 movies를 가지고 있는 vue 인스턴스 생성
// 2. created 함수가 실행되면서 api를 통해 movies를 가져옴
// 3. vue의 movies 안에 가져온 movies 데이터를 할당
// 4. vue의 데이터에 변화가 생기면서 새롭게 렌더링
const app = new Vue({
    el:'#main',
    data:{
        query:'',
        movies: []
    },
    //함수를 정의하는 곳, caching 이 됨 => 함수의 반환값을 vue가 알고있음
    computed:{
        filteredMovies: function(){
            // query 로 filtering 한 movie 만 반환
            
            //내코드s
            // return this.movies.filter(movie=>{
            //     return movie.title.toLowerCase().includes(this.query)
            // })
            
            //선생님코드
            // const newMovies = []
            // const query = this.query.trim().toLowerCase()
            // for (const movie of this.movies){
            //     if (movie.title.trim().toLowerCase().includes(query)){
            //         newMovies.push(movie)
            //     }

            // }

            // return newMovies
                        //선생님코드2
            //0 === ''
            //0 === []
            //'' !== []
            //0 false
            //1 true

            if (!this.query){//''<=사용자가 검색을 안함
                return this.movies
            }
            const query = this.query.trim().toLowerCase()
            //callback 함수에서 반환되는 값이 true인 아이템 만으로 새로운 배열 생성
            const newMovies = this.movies.filter(movie=>{
                return movie.title.toLowerCase().trim().includes(query)
            })
            return newMovies
        
        }
    },
    // Vue 인스턴스가 생성되고 난 후 실행하는 함수
    async created(){
        const response = await axios.get(URL)
        const movies = response.data.results
        //callback 함수에서 return 되는 아이템으로 새롭게 배열을 만듬
        this.movies = movies.map(movie=>{
            return {title:movie.title,image:IMG_URL+movie.poster_path}
        })
    }
})