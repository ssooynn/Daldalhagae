import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import PackageImage1 from '../assets/img/BasicPackage.png'
import PackageImage2 from '../assets/img/PlayPackage.png'
import PackageImage3 from '../assets/img/AllInOnePackage.png'
import daldalPackage from '../assets/img/DalDalPackage.png'
import toyPackage from '../assets/img/ToyPackage.png'
import lightPackage from '../assets/img/LightAllInOnePackage.png'
import 자유구독 from '../assets/img/나만의구독서비스.png'

const PackageBoxDesign = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.2rem;
::before{
  border-radius: 10px;
  background-size: cover;
  background-image: ${(props) => {
		let iamge;
		console.log(props);
		switch (props.packageName) {
			case 'Basic Package':
				iamge = `url(${PackageImage1})`;
				break;
			case 'Play Package':
				iamge = `url(${PackageImage2})`;
				break;
			case 'All In One Package':
				iamge = `url(${PackageImage3})`;
				break;
			case 'DalDal Package':
				iamge = `url(${daldalPackage})`;
				break;
			case 'Toy Package':
				iamge = `url(${toyPackage})`;
				break;
			case 'Light All Package':
				iamge = `url(${lightPackage})`;
				break;
			default:
				iamge = `url(${자유구독})`;
				break;
		}
		return iamge
	}};
  content: "";
  position: absolute;
  top: 0%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.35;
}
object-fit: cover;
`
const PackageBox = (props) => {
	const info = props.info
	const pickedProducts = props.pickedProducts
	const index = props.index

	const [feeds, setFeeds] = useState([])
	const [snacks, setSnacks] = useState([])
	const [toys, setToys] = useState([])
	const petSno = props.info[7]
	let subscriptionNo = 0
	let historyNo = 0
	let recoFlag = false

	useEffect(() => {
		axios({
			method: 'post',
			url: `https://j7a302.p.ssafy.io/api-gateway/business-api/recommend/item`,
			headers: {
				'Authorization': `Bearer a.a.a`
			},
			data: {
				recoFlag: recoFlag,
				petSno: petSno,
				subscriptionNo: subscriptionNo,
				historyNo: historyNo
			}
		})
			.then((res) => {
				setFeeds(res.data.feeds)
				setSnacks(res.data.snacks)
				setToys(res.data.toys)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	useEffect(() => {
		const copyPickedProduct = [...pickedProducts]
		if (pickedProducts[index][0].length < info[4][0]) {
			let gap1 = info[4][0] - pickedProducts[index][0].length
			for (let idx = 0; idx < feeds.length; idx++) {
				let flag = true
				for (let j = 0; j < pickedProducts[index][0].length; j++) {
					if (pickedProducts[index][0][j].sno === feeds[idx].sno) {
						flag = false
						break
					}
				}
				if (flag) {
					console.log(gap1, feeds[idx])
					copyPickedProduct[index][0].push(feeds[idx])
					gap1 -= 1
					if (gap1 === 0) { break }
				}
			}
		}
		if (pickedProducts[index][1].length < info[4][1]) {
			let gap2 = info[4][1] - pickedProducts[index][1].length
			for (let idx = 0; idx < snacks.length; idx++) {
				let flag = true
				for (let j = 0; j < pickedProducts[index][1].length; j++) {
					if (pickedProducts[index][1][j].sno === snacks[idx].sno) {
						flag = false
						break
					}
				}
				if (flag) {
					copyPickedProduct[index][1].push(snacks[idx])
					gap2 -= 1
					if (gap2 === 0) { break }
				}
			}
		}
		if (pickedProducts[index][2].length < info[4][2]) {
			let gap3 = info[4][2] - pickedProducts[index][2].length
			for (let idx = 0; idx < toys.length; idx++) {
				let flag = true
				for (let j = 0; j < pickedProducts[index][2].length; j++) {
					if (pickedProducts[index][2][j].sno === toys[idx].sno) {
						flag = false
						break
					}
				}
				if (flag) {
					copyPickedProduct[index][2].push(toys[idx])
					gap3 -= 1
					if (gap3 === 0) { break }
				}
			}
		}
		props.setPickedProducts(copyPickedProduct)
	}, [feeds, snacks, toys])

	function Productinfos(props) {
		const products = props.products
		return <div
			style={{
				display: 'flex',
				textAlign: 'center',
				flexDirection: 'column'
			}}>
			{products.map((product, idx) => {
				return <div style={{ display: 'flex' }}>
					{props.i === 0 ? <p style={{ width: '30%' }}>사료</p> :
						(props.i === 1 ? <p style={{ width: '30%' }}>간식</p> :
							<p style={{ width: '30%' }}>장난감</p>)}
					<p style={{ width: '40%' }}>{product.name}</p>
					<p style={{ width: '30%' }}>{product.materials}</p>
				</div>
			})}
		</div>
	}

	return (<div>
		<PackageBoxDesign packageName={info[0]}>
			<div style={{ width: '80%' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<h2>{info[0]} - {info[6]}</h2>
					<p>월 {info[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
				</div>
				<p>{info[1]}</p>
			</div>
		</PackageBoxDesign>
		<div  // 결제 목록
			style={{
				backgroundColor: '#FFFDFB',
				height: '100%',
				borderRadius: '0 0 5px 5px',
				boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
				padding: '10px 0 20px 0',
				position: 'relative',
			}}>
			<div style={{ margin: '0 20px 0 20px', paddingTop: '20px' }}>
				<div  // 표 제목
					style={{
						display: 'flex',
						textAlign: 'center',
						fontWeight: 'bold',
						fontSize: '18px'
					}}>
					<p
						style={{
							width: '30%',
							margin: 'auto'
						}}>분류</p>
					<p
						style={{
							width: '40%',
							margin: 'auto'
						}}>제품명</p>
					<p
						style={{
							width: '30%',
							margin: 'auto'
						}}>주 원료 / 소재</p>
				</div>
				<hr style={{ backgroundColor: '#F3CEB2', height: '0.1px' }} />
				{pickedProducts[index].map((products, idx) => {
					return <Productinfos products={products} i={idx} />
				})}
			</div>
		</div>
	</div>
	)
}

export default PackageBox