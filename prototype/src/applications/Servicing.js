import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from 'grommet'
import MegaCard from 'mega-card'
import configData from '../config.json'
import EditSelect from '../components/EditSelect.js'

const Servicing = () => {
  const [currentFeature, setCurrentFeature] = useState('')
  const [isEditingCurrentFeature, setIsEditingCurrentFeature] = useState(false)

  useEffect(() => {
    const getFeature = async () => {
      const feature = await readCurrentServicingFeature()
      return feature
    }
    getFeature().then(feature => {
      setCurrentFeature(feature)
    })
  }, [])

  const readCurrentServicingFeature = async () => {
    const response = await axios.get(
      'http://localhost:777/servicing/read/authenticatedAppInfo'
    )
    return response.data.CURRENT_RESPONSE_KEY
  }

  const handleCurrentFeatureChange = async ({ option }) => {
    setCurrentFeature(option)
    setIsEditingCurrentFeature(false)
    const authenticatedAppInfoResponse = await axios.get(
      'http://localhost:777/servicing/read/authenticatedAppInfo'
    )
    const file = authenticatedAppInfoResponse.data
    file.CURRENT_RESPONSE_KEY = option

    await axios.post(
      'http://localhost:777/servicing/write/authenticatedAppInfo',
      file
    )
  }

  const handleEditCurrentFeatureClick = () => {
    setIsEditingCurrentFeature(!isEditingCurrentFeature)
  }

  return (
    <Box
      align="center"
      direction="row"
      fill="horizontal"
      justify="between"
      pad="large"
    >
      <Box>
        <MegaCard
          data={
            <EditSelect
              buttonClickHandler={handleEditCurrentFeatureClick}
              options={configData.servicing.features.filter(
                feature => feature !== currentFeature
              )}
              selectChangeHandler={handleCurrentFeatureChange}
              selectValue={currentFeature}
              title={currentFeature}
              trigger={isEditingCurrentFeature}
            />
          }
          icon="Cube"
          title="CURRENT FEATURE"
          type="pill"
        />
      </Box>
    </Box>
  )
}

export default Servicing
