import styled from 'styled-components'

export const CollectionItemStyle = styled.div`
width: 22%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

`

export const ImageStyle = styled.div`
width: 100%;
		height: 95%;
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;

`
export const CollectionFooterStyle = styled.div`
width: 100%;
		height: 95%;
		background-size: cover;
		background-position: center;
		margin-bottom: 5px;

`

 
			 
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price"> $ {price}</span>
			</div>