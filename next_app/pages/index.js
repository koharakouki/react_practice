import Link from 'next/link';
import Layout from '../components/Layout';

export default () =>(
	<Layout header="Next" title="top page.">
	  <p>Welcome to next.js!</p>
	  <hr />
	  <Link href="./other">
	    <button>go to Other &gt;&gt; </button>
	  </Link>
	</Layout>
);

