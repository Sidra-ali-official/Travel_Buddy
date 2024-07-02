import "./TripStyles.css";
import TripData from "/src/components/TripData";
import Trip1 from "/src/assets/50.avif";
import Trip2 from "/src/assets/70.avif";
import Trip3 from "/src/assets/72.jpg";
import Trip4 from "/src/assets/71.avif";
import Trip5 from "/src/assets/55.avif";
import Trip6 from "/src/assets/56.avif";
import Trip7 from "/src/assets/75.jpg";
import Trip9 from "/src/assets/73.avif";

import Trip8 from "/src/assets/59.avif";

function Trip() {
  return (
    <div className="trip">
      <h1>Historical Monuments of India</h1>
      <p>Historical places in India that you will find extremely fascinating</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Taj Mahal"
          text="The Taj Mahal, an exquisite white marble mausoleum in Agra, India, stands as a symbol of eternal love. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage site combines Persian, Islamic, and Indian architectural styles. Its stunning beauty, intricate carvings, and the reflective pool create a mesmerizing sight, attracting millions of visitors worldwide."
        />

        <TripData
          image={Trip2}
          heading="Hawa Mahal"
          text="Hawa Mahal, or the Palace of Winds, in Jaipur, India, is an architectural marvel known for its unique five-story façade with 953 small windows, or jharokhas. Built in 1799 by Maharaja Sawai Pratap Singh, this pink sandstone structure allowed royal women to observe street festivities while remaining unseen, epitomizing the Rajput style of architecture."
        />

        <TripData
          image={Trip3}
          heading="Gate Way Of India"
          text="The Gateway of India, located in Mumbai, is an iconic arch-monument built in 1924 to commemorate the visit of King George V and Queen Mary to India. Overlooking the Arabian Sea, this grand basalt structure is a blend of Hindu and Muslim architectural styles, symbolizing a historic passage to India's colonial past and independence."
        />

        <TripData
          image={Trip4}
          heading="India Gate"
          text="India Gate, situated in New Delhi, is a monumental archway dedicated to the 82,000 Indian soldiers who died during World War I. Designed by Sir Edwin Lutyens and completed in 1931, this 42-meter high structure resembles the Arc de Triomphe in Paris. It stands as a poignant symbol of sacrifice and is a popular site for national ceremonies and public gatherings."
        />

        <TripData
          image={Trip5}
          heading="Jama Masjid"
          text="Jama Masjid, located in the heart of Old Delhi, is one of the largest and most magnificent mosques in India. Commissioned by Mughal Emperor Shah Jahan in 1650, this stunning red sandstone and white marble structure features a vast courtyard, impressive domes, and towering minarets, epitomizing Mughal architectural splendor and religious devotion."
        />
        <TripData
          image={Trip6}
          heading="Red Fort"
          text="The Red Fort in Delhi, a UNESCO World Heritage site, is an imposing red sandstone fortress that served as the main residence of Mughal emperors for nearly 200 years. Built by Shah Jahan in 1648, this majestic fort with its massive walls, intricate palaces, and lush gardens is a powerful symbol of India's rich history and architectural grandeur."
        />

        <TripData
          image={Trip8}
          heading="Golden Temple"
          text="The Golden Temple, or Harmandir Sahib, in Amritsar, Punjab, is the holiest shrine of Sikhism. Founded by Guru Ram Das in 1581, this stunning temple, adorned with gold leaf, sits in the middle of a sacred pool. Its shimmering beauty, serene surroundings, and spiritual significance draw millions of pilgrims and visitors from around the world."
        />

        <TripData
          image={Trip9}
          heading="Lotus Temple"
          text="The Lotus Temple, located in New Delhi, is a striking Bahá'í House of Worship renowned for its flower-like design. Completed in 1986, this architectural masterpiece features 27 marble-clad petals arranged in clusters to resemble a blooming lotus. Emphasizing unity and peace, the temple welcomes people of all religions to meditate and worship in its serene, light-filled interior."
        />

        <TripData
          image={Trip7}
          heading="Victoria Memorial"
          text="
        
          The Victoria Memorial, located in Kolkata, India, is a grand marble edifice built between 1906 and 1921 in memory of Queen Victoria. This splendid monument, blending British and Mughal architectural styles, is surrounded by lush gardens and houses a museum with an extensive collection of artifacts from the colonial era. As a symbol of Kolkata's historical and cultural legacy, the Victoria Memorial attracts numerous visitors, offering a glimpse into India's storied past."
        />
      </div>
    </div>
  );
}

export default Trip;
