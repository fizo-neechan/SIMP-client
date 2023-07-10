import React from 'react'
import '../css/team.css'
import '../css/font-awesome.min.css'
import memberImage1 from '../img/member/1.jpg'
import memberImage2 from '../img/member/2.jpg'
import memberImage3 from '../img/member/3.jpg'
import memberImage4 from '../img/member/4.jpg'


const Team = () => {
  return (
    	<section className="team-section spad">
		<div className="container" >
			<div className="section-title text-center">
				<h2>Meet Our Team</h2>
				<p>Our experts in the field of stocks prediction can always help you with any of your questions!</p>
			</div>
		</div>
		<div className="team-members">
			<div className="member">
				<div className="member-text">
					<img className="member-img set-bg" src={memberImage1}></img>
					<h2>Raja Ata Ul Karim</h2>
					<span>Sophomore CS Student</span>
				</div>
				<div className="member-social">
					<a href="http://Insta.com/raja.jpeg" target="_blank"><i className="fa fa-instagram"></i></a>
					<a href="http://Linkedin.com/rajataaulkarim" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="http://GitHub.com/r2ja" target="_blank"><i className="fa fa-github"></i></a>
				</div>
				<div className="member-info">
					<img className="member-img mf set-bg" src={memberImage1}></img>
					<div className="member-meta">
						<h2>Raja Ata Ul Karim</h2>
						<span>Member</span>
						</div>
					<p>Raja Ata Ul Karim is a Sophomoee Computer Science student with an expertise in absolutely nothing.
						<br/><br/>"I'm just here in the degree because I heard you get a job, and that sounds pretty neat, if you ask me</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<img className="member-img set-bg" src={memberImage2}></img>
					<h2>Shehryar Ahmad</h2>
					<span>Sophomore CS Student</span>
				</div>
				<div className="member-social">
					<a href="https://www.instagram.com/sh3rrryyy/" target="_blank"><i className="fa fa-instagram"></i></a>
					<a href="https://www.linkedin.com/in/sherry-ahmad/" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/emsherry" target="_blank"><i className="fa fa-github"></i></a>
				</div>
				<div className="member-info">
					<img className="member-img mf set-bg" src={memberImage2}></img>
					<div className="member-meta">
						<h2>Shehryar Ahmad</h2>
						<span>Member</span>
					</div>
					<p>Shehryar Ahmad is a Sophomoee Computer Science student with an expertise in C++, HTML, CSS, JavaScript, PHP, Python and much more.
						<br/>“To pursue a challenging career and be part of a progressive organization that gives scope to enhance my knowledge, skills and to reach the pinnacle in the computing and research field with sheer determination, dedication, and hard work.</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<img className="member-img set-bg" src={memberImage3}></img>
					<h2>Ali Inayatullah</h2>
					<span>Sophomore CS Student</span>
				</div>
				<div className="member-social">
					<a href="https://www.instagram.com/aliinayatullah/" target="_blank"><i className="fa fa-instagram"></i></a>
					<a href="https://linkedin.com/in/ali-inayatullah" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/AliInayatullah" target="_blank"><i className="fa fa-github"></i></a>
				</div>
				<div className="member-info">
					<img className="member-img mf set-bg" src={memberImage3}></img>
					<div className="member-meta">
						<h2>Ali Inayatullah</h2>
						<span>Member</span>
					</div>
					<p>Ali Inayatullah is a Sophomore Computer Science Student with expertise in C++, Python, HTML, CSS and Javascript.<br/>"I possess the skills and knowledge necessary to create and implement efficient software solutions. my objective is to gain a thorough understanding of computing systems and the ability to apply this knowledge to solve complex problems."</p>
				</div>
			</div>
			<div className="member">
				<div className="member-text">
					<img className="member-img set-bg" src={memberImage4}></img>
					<h2>Faizan Haq</h2>
					<span>Sophomore CS Student</span>
				</div>
				<div className="member-social">
					<a href="http://instagram.com/fizo-neechan" target="_blank"><i className="fa fa-instagram"></i></a>
					<a href="https://www.facebook.com/muhammad.faizan.94695459/" target="_blank"><i className="fa fa-facebook"></i></a>
					<a href="http://github.com/fizo-neechan" target="_blank"><i className="fa fa-github"></i></a>
				</div>
				<div className="member-info">
					<img className="member-img mf set-bg" src={memberImage4}></img>
					<div className="member-meta">
						<h2>Faizan Haq</h2>
						<span>Member</span>
					</div>
					<p>A 2nd year computer science undergraduate student with a passion for computer vision. Skilled in Python, OpenCV, TensorFlow, Torch and Yolo. <br/><br/>"If you ever think of a quote but want it to sound smarter, just say albert einstein said it" ~Albert Einstein</p>
				</div>
			</div>
        </div>
    </section>
  )
}

export default Team
