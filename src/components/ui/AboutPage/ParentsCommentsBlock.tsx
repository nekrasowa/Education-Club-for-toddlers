import { parentsComments, type TComment } from '@/public/parentsComments'
import { Carousel, ConfigProvider } from 'antd'
import { colorPlate } from '@/public/parentsComments'
import './AboutPage.module.css'

export function ParentsCommentsBlock() {
  return (
    <div className='parentsCommentsBlock'>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              arrowSize: 40,
              arrowOffset: 30,
              dotWidth: 10,
              dotHeight: 10,
              dotGap: 10,
              colorBgContainer: 'black',
            },
          },
        }}
      >
        <Carousel autoplay arrows infinite autoplaySpeed={3000}>
          {parentsComments.map((comment: TComment, i: number) => {
            return (
              <div
                key={i}
                className={`${colorPlate[i]} h-100 text-center px-60 py-30 `}
              >
                <p className='text-2xl font-semibold pb-7'>{`“${comment.text}”`}</p>
                <p className='text-xl'>{`— ${comment.authorName}`}</p>
              </div>
            )
          })}
        </Carousel>
      </ConfigProvider>
    </div>
  )
}
