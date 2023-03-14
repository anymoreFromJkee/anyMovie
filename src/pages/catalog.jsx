import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../components/page-header/page-header.component'

import { category as cate } from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid/movie-grid.component'
export default function Catalog() {

  const {category} = useParams()

  return (
    <PageHeader>
      {category === cate.movie ? 'Movies' : 'TV Series'}
      <div className='container'>
        <div className='section mb-3'>
          <MovieGrid category={category}/>
        </div>
      </div>
    </PageHeader>
  )
}
