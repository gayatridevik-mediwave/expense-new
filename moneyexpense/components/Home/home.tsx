import React from 'react';
import Header from '../Header/header';
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Addinfo from '../Addinfo/addinfo';
import Footer from '../Footer/footer';
import Datepicker from '../Datepicker/datepicker';
import Displayamt from '../Displayamt/displayamt';
import Card from '../Card/card';

function Home({navigation}: any) {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.screenimage}
        source={require('../../assets/background.png')}>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <View>
              <Text style={styles.manage}>Manage your expenses</Text>
            </View>
            <Datepicker />
            <Displayamt />
            <Card />
            {/* <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis molestiae accusamus iure eos accusantium minima quisquam repellat dicta recusandae magnam odit incidunt distinctio autem repellendus assumenda, eius aut voluptatem officia a tenetur ipsam fuga quo! At tempora quibusdam perspiciatis, ut vitae assumenda consectetur adipisci illo repudiandae! Nisi sapiente nemo magnam? Iure qui, ut sit voluptates aliquam totam quidem ea praesentium fugiat numquam consequuntur voluptas. Ad accusamus corrupti obcaecati vitae dicta! Vero ea eum asperiores pariatur laudantium est aspernatur eligendi officia numquam porro, magnam voluptatem veniam, cupiditate odio. Vel, expedita? Suscipit, minus aspernatur? Reiciendis rem reprehenderit tempore! Ut error porro perspiciatis aliquam quae. Nam dolores quisquam, error magnam quasi animi odio numquam quos? Laborum sunt provident, ad quibusdam voluptas debitis, consequuntur veritatis facilis blanditiis qui quo aut molestiae velit, excepturi delectus! Modi minima iure ut, ducimus voluptates dolore enim, sunt animi repellendus nulla qui officiis possimus odit soluta autem quidem reprehenderit? Debitis ipsam suscipit veritatis tenetur voluptatibus consequuntur. Quo harum repudiandae vel doloremque sint nihil illum, sapiente vitae pariatur! Nemo numquam voluptatum necessitatibus quia non velit repellendus temporibus laboriosam. Exercitationem iusto reprehenderit ipsa consectetur ducimus voluptas architecto maxime aspernatur minima unde fuga praesentium pariatur totam repellendus enim, doloribus amet laudantium optio corporis aperiam perspiciatis dolorum? Rem enim amet facere! Earum eveniet distinctio, consequatur officiis eius molestiae fuga facilis optio? Doloribus nulla mollitia maxime! Quod quibusdam perspiciatis perferendis, dolores voluptatum quae atque quis commodi tempore! Quod veniam quo voluptates inventore itaque eligendi at necessitatibus voluptas, sint voluptatem nam nostrum. Iure unde, tenetur commodi iste nam amet necessitatibus quos vitae. Sed vitae velit impedit laborum aliquid, est tempore temporibus id fugit quod quis sequi porro enim cupiditate aspernatur? Similique, aperiam. Cum laudantium dolorem accusantium nostrum eos rem, harum perferendis magni quod, ipsa saepe ab at maiores consequatur, iure reiciendis temporibus dolor quisquam. Soluta, veniam voluptas? Ullam obcaecati officia ipsum repudiandae! Quia debitis ad quos libero? Aut animi quibusdam aspernatur in incidunt, dicta deleniti corrupti asperiores reprehenderit rem accusantium harum quis, nihil explicabo doloribus pariatur architecto, dolores repellendus perferendis autem ut itaque. Alias quo aliquid atque dolorem quis doloremque quaerat? Voluptatem aperiam ea eligendi reprehenderit aut in, perspiciatis, totam expedita dolores rem eveniet. Obcaecati voluptas quibusdam dolor ex nostrum recusandae iure eligendi at nisi, culpa optio quasi assumenda possimus inventore laborum repellendus est consequuntur, voluptatibus debitis quisquam labore. Accusamus eos tenetur accusantium illo id voluptatibus totam sed minus omnis, quos laudantium similique sit placeat, alias neque exercitationem suscipit quia cupiditate, officia doloribus mollitia. Rerum dignissimos minus ipsum dolorum dolores maiores dolore quas fugit magnam iusto, modi impedit provident ratione dicta expedita fugiat sint aliquam. Fugit autem vel, tenetur maxime, vero dolor veritatis eveniet mollitia nobis adipisci reiciendis ipsum sed sunt explicabo. Atque autem doloremque impedit. Voluptate natus porro magni, repudiandae quaerat, labore quidem non excepturi exercitationem quibusdam recusandae hic error, molestias laborum dicta inventore accusantium ipsam laboriosam! Dolorem, eum adipisci? Aliquid ex nam unde aperiam libero debitis fugit excepturi hic repellendus, dolore sapiente doloribus. Aut, delectus animi vero asperiores temporibus dolore ipsum accusamus veritatis, praesentium voluptatibus porro deserunt corrupti fuga error, tenetur nulla! Libero eos voluptatem dolores illo. Incidunt, ipsum, animi enim vel rem quos modi aspernatur, laborum ut doloremque pariatur nemo delectus nulla? Atque illum ab, consectetur impedit explicabo repellendus, numquam provident animi molestias fuga maxime sit quis reprehenderit recusandae natus eligendi. Corporis tenetur laudantium perferendis, sint nihil consectetur labore, commodi quos temporibus culpa architecto animi? Qui expedita excepturi corporis incidunt, libero temporibus dicta ratione iusto dolores officiis quos, eum assumenda. Quae laboriosam veniam incidunt, minima iste harum maxime id soluta et est omnis, impedit quo sequi at accusamus magni quidem? Ducimus ipsam similique repellendus aliquid, dolorem eaque! Rerum ad labore ut eos fugiat delectus eveniet quasi dignissimos quidem saepe, veniam consectetur provident adipisci earum molestias, omnis sunt. Commodi autem temporibus ullam dolore, consequatur mollitia! Maxime rem aliquam minima earum quas animi sit sequi non sunt praesentium eaque excepturi quae magnam, veniam incidunt, vero, mollitia provident similique dignissimos maiores adipisci ducimus modi expedita minus? Quae voluptatum pariatur impedit illum nisi atque! A rem aliquid iste hic adipisci earum necessitatibus quidem repudiandae voluptatum aliquam at recusandae impedit quod, assumenda delectus itaque, et, perferendis est neque. Inventore dolor eius cumque quod, consectetur voluptatibus explicabo eos qui natus a commodi cupiditate, amet, nesciunt nam illo distinctio asperiores labore velit ea id quisquam. Autem consequatur officia provident dolorem quas omnis minus sunt voluptatum, consequuntur quaerat facere vel, distinctio vitae ratione quos, in adipisci placeat minima ullam? Explicabo magnam, veritatis officiis reprehenderit aperiam dolorem numquam modi voluptate maxime qui eaque eum laudantium odit a minima perferendis accusantium iusto mollitia nulla. Autem nostrum vel voluptates, non fugit ipsum explicabo quod placeat rerum animi facere, necessitatibus dolor sed cumque? Quis illum eveniet, hic iste architecto saepe maxime facere aut distinctio consectetur! Quidem alias assumenda reiciendis commodi provident ab placeat illo?</Text> */}

            {/* <Button
            title="First Screen"
            onPress={() => navigation.navigate('Design')}
          /> */}
            <Addinfo />
          </View>
        </ScrollView>
      </ImageBackground>

      <Footer />
      {/* <Header /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  screenimage: {
    flex: 1,
  },
  manage: {
    marginTop: 20,
    fontSize: 33,
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'Varela-Regular',
  },
});
export default Home;
