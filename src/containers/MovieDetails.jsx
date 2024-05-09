import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getMovie, resetState} from '../redux/movie'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Movie from '../components/Movie'

function MovieDetails() {

const dispatch = useDispatch()
const {id} = useParams()
const {movie} = useSelector((store)=>store)
const {genres} = useSelector((store)=>store.genres)

useEffect(() => {
  dispatch(getMovie(id ? parseInt(id, 10) : 0))

  return () => {
    dispatch(resetState())
  }
}, [dispatch])

useEffect(()=>{
  if(id !== movie.id?.toString()){
    dispatch(getMovie(id ? parseInt(id, 10) : 0))
  }
}, [id,movie.id])

  return (
    movie.isFetching ? <Loader/> : <Movie movie={movie} genres={genres}/>
    
  )
}

export default MovieDetails
